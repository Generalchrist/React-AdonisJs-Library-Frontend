/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from "react"
import { ActivityLogsModel } from "../core/_models"
import { useMutation, useQuery } from "react-query"
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

  if (response !== undefined && activityLogsData.length === 0 && response.length !== 0) {
    setActivityLogsData(response)
  }


  return (
    <>
      <div className="p-5 bg-image" style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')", height: '300px' }}>
        <section className=" text-center container">
          <div className="row ">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Activity Logs of Booklandia</h1>
              <p className="lead text-body-secondary">
                Here you can see the activity logs of Booklandia
              </p>
            </div>
          </div>
        </section>
      </div>
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
            {activityLogsData.map((activityLog: ActivityLogsModel) => {
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