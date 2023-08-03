/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from "react"
import { ActivityLogsModel } from "../core/_models"
import { useQuery } from "react-query"
import { getActivityLogs } from "../core/_requests"



const ActivityLogs = () => {

  const {
    data: response,
  } = useQuery(
    `get-activity-logs`,
    () => {
      return getActivityLogs().then((response) => {
        return response
    })
    },
    { cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false }
  )

  const [activityLogsData, setActivityLogsData] = useState(response ? response : [])

  if(response !== undefined && activityLogsData.length === 0 && response.length !== 0){
    setActivityLogsData(response)
  }


  return (
    <>
      <div className="p-5 bg-image" style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')", height: '300px' }}></div>
      <div className=" p-5 container ">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">user id</th>
              <th scope="col">book id</th>
              <th scope="col">activity type</th>
            </tr>
          </thead>
          <tbody>
            {activityLogsData.map((activityLog : ActivityLogsModel) => {
              return (
                <tr key={activityLog.id}>
                  <th scope="row">{activityLog.id}</th>
                  <td>{activityLog.user_id}</td>
                  <td>{activityLog.book_id}</td>
                  <td>{activityLog.activity_type}</td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
      </div>
    </>

  )
}

export default ActivityLogs