window.TIMETABLE = {
  routes: [

    {
      id: "t2-loop",
      timeRange: {
        start: "09:00",
        end: "15:00"
      },

      // 실제 정류장별 예정 시각
      schedule: [
        { stopId: "ICN_T2", time: "09:00" },
        { stopId: "ICN_T1_OUT", time: "09:20" },
        { stopId: "PARADISE_OUT", time: "09:25" },
        { stopId: "HYATT_OUT", time: "09:30" },
        { stopId: "MAPO_M", time: "10:30" },
        { stopId: "MAPO_GARDEN", time: "10:40" },
        { stopId: "YEONGDEUNGPO", time: "10:55" },
        { stopId: "GANGNAM", time: "11:30" },
        { stopId: "MYEONGDONG", time: "12:00" },
        { stopId: "SEOUL_STATION", time: "12:20" },
        // 정차 후 복귀
        { stopId: "SEOUL_STATION", time: "13:20" },
        { stopId: "ICN_T1_IN", time: "14:25" },
        { stopId: "ICN_T2", time: "14:40" }
      ]
    },

    {
      id: "t2-seoul",
      timeRange: {
        start: "15:00",
        end: "18:20"
      },

      schedule: [
        { stopId: "ICN_T2", time: "15:00" },
        { stopId: "ICN_T1_OUT", time: "15:20" },
        { stopId: "PARADISE_OUT", time: "15:25" },
        { stopId: "HYATT_OUT", time: "15:30" },
        { stopId: "YEONGDEUNGPO", time: "16:25" },
        { stopId: "GANGNAM", time: "16:50" },
        { stopId: "MYEONGDONG", time: "17:20" },
        { stopId: "SEOUL_STATION", time: "17:40" },
        { stopId: "MAPO_M", time: "18:05" },
        { stopId: "MAPO_GARDEN", time: "18:20" }
      ]
    }

  ]
};