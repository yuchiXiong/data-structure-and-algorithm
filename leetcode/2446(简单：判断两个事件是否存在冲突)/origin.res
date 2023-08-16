let today = () => {
  let date = Js.Date.make()
  let year = Belt.Float.toString(Js.Date.getFullYear(date))
  let month = Belt.Int.toString(Belt.Float.toInt(Js.Date.getMonth(date)) + 1)
  let day = Belt.Float.toString(Js.Date.getDate(date))

  `${year}-${month}-${day}`
}

let getTime = (event: string) => {
  let date = Js.Date.fromString(`${today()} ${event}:00`)
  Js.Date.getTime(date)
}

let haveConflict = (event1: (string, string), event2: (string, string)) => {
  let (start1, end1) = event1
  let (start2, end2) = event2

  let (event1Start, event1End) = (getTime(start1), getTime(end1))
  let (event2Start, event2End) = (getTime(start2), getTime(end2))

  (event1Start >= event2Start && event1Start <= event2End) ||
  event1End >= event2Start && event1End <= event2End ||
  event2Start >= event1Start && event2Start <= event1End ||
  (event2End >= event1Start && event2End <= event1End)
}
