let testForOneSec = seconds => {
  if (seconds == 1) {
    return seconds + ' second'
  } else if (seconds == 0) {
    return ''
  } else {
    return seconds + ' seconds'
  }
}

let testForOneMin = minutes => {
  if (minutes == 1) {
    return minutes + ' minute'
  } else if (minutes == 0) {
    return ''
  } else {
    return minutes + ' minutes'
  }
}

let testForOneHour = hour => {
  if (hour == 1) {
    return hour + ' hour'
  } else if (hour == 0) {
    return ''
  } else {
    return hour + ' hours'
  }
}

let testForOneDay = day => {
  if (day == 1) {
    return day + ' day'
  } else if (day == 0) {
    return ''
  } else {
    return day + ' days'
  }
}

let testForOneYear = year => {
  if (year == 1) {
    return year + ' year'
  } else if (year == 0) {
    return ''
  } else {
    return year + ' years'
  }
}

function formatDuration(seconds) {
  if (seconds == 0) {
    return 'now'
  } else if (seconds < 60) {
    return testForOneSec(seconds)
  } else if (60 <= seconds && seconds < 3600) {
    a = seconds / 60
    minutes = Math.floor(a)
    second = Math.round((a - minutes) * 60)
    if (a % minutes == 0) {
      return testForOneMin(minutes)
    } else {
      return testForOneMin(minutes) + ' and ' + testForOneSec(second)
    }
  } else if (3600 <= seconds && seconds < 86400) {
    a = seconds / 60
    h = seconds / 60 / 60
    hours = Math.floor(h)
    minutes = Math.floor((h - hours) * 60)
    second = Math.round(seconds - hours * 60 * 60 - minutes * 60)
    if (h % hours == 0) {
      return testForOneHour(hours)
    } else {
      if (a % minutes == 0) {
        return testForOneHour(hours) + ', ' + testForOneMin(minutes)
      } else if (minutes == 0) {
        return testForOneHour(hours) + ' and ' + testForOneSec(second)
      } else {
        return (
          testForOneHour(hours) +
          ', ' +
          testForOneMin(minutes) +
          ' and ' +
          testForOneSec(second)
        )
      }
    }
  } else if (86400 < seconds && seconds < 31536000) {
    a = seconds / 60
    h = seconds / 60 / 60
    d = seconds / 86400
    day = Math.floor(seconds / 86400)
    h = (seconds - day * 86400) / 60 / 60
    hours = Math.floor(h)
    minutes = Math.floor((h - hours) * 60)
    second = Math.round(
      seconds - day * 60 * 60 * 24 - hours * 60 * 60 - minutes * 60
    )
    if (d % day == 0) {
      return testForOneDay(day)
    } else {
      if (h % hours == 0) {
        return testForOneDay(day) + ', ' + testForOneHour(hours)
      } else if (hours == 0) {
        if (a % minutes == 0) {
          return (
            testForOneDay(day) +
            ', ' +
            testForOneHour(hours) +
             ' and ' +
            testForOneMin(minutes)
          )
        } else if (minutes == 0) {
          return (
            testForOneDay(day) +
            ' and ' +
            // testForOneHour(hours) +
            // ' and ' +
            testForOneSec(second)
          )
        } else {
          return (
            testForOneDay(day) +
            ', ' +
            // testForOneHour(hours) +
            // ', ' +
            testForOneMin(minutes) +
            ' and ' +
            testForOneSec(second)
          )
        }
      } else {
        if (a % minutes == 0) {
          return (
            testForOneDay(day) +
            ', ' +
            // testForOneHour(hours) +
            // ', ' +
            testForOneMin(minutes)
          )
        } else if (minutes == 0) {
          return (
            testForOneDay(day) +
            // ', ' +
            // testForOneHour(hours) +
            ' and ' +
            testForOneSec(second)
          )
        } else {
          return (
            testForOneDay(day) +
            ', ' +
            testForOneHour(hours) +
            ', ' +
            testForOneMin(minutes) +
            ' and ' +
            testForOneSec(second)
          )
        }
      }
    }
  } else if (31536000 < seconds) {
    a = seconds / 60
    h = seconds / 60 / 60
    d = seconds / 86400
    y = seconds / 31536000
    year = Math.floor(y)
    da = (seconds - year * 31536000) / 86400
    day = Math.floor(da)
    ho = (seconds - year * 31536000 - day * 86400) / 60 / 60
    hours = Math.floor(ho)
    minutes = Math.floor((ho - hours) * 60)
    second = Math.round(
      seconds -
        year * 60 * 60 * 24 * 365 -
        day * 60 * 60 * 24 -
        hours * 60 * 60 -
        minutes * 60
    )
    if (y % year == 0) {
      return testForOneYear(year)
    } else {
      if (d % day == 0) {
        return testForOneYear(year) + ', ' + testForOneDay(day)
      } else {
        if (h % hours == 0) {
          return (
            testForOneYear(year) +
            ', ' +
            testForOneDay(day) +
            ', ' +
            testForOneHour(hours)
          )
        } else {
          if (a % minutes == 0) {
            return (
              testForOneYear(year) +
              ', ' +
              testForOneDay(day) +
              ', ' +
              testForOneHour(hours) +
              ' and ' +
              testForOneMin(minutes)
            )
          } else if (minutes == 0) {
            return (
              testForOneYear(year) +
              ', ' +
              testForOneDay(day) +
              ', ' +
              testForOneHour(hours) +
              ' and ' +
              testForOneSec(second)
            )
          } else {
            return (
              testForOneYear(year) +
              ', ' +
              testForOneDay(day) +
              ', ' +
              testForOneHour(hours) +
              ', ' +
              testForOneMin(minutes) +
              ' and ' +
              testForOneSec(second)
            )
          }
        }
      }
    }
  }
}

{/*
Below logger prints the result of formatDuration() to your CLI:
`node messy_max_solution.js 12345` => "3 hours, 25 minutes and 45 seconds"
*/}
console.log(formatDuration(process.argv[2]));
