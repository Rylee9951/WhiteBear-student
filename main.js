$(document).ready(function () {
  $("#card2").toggle()
  $("#deleteBtn").toggle()
  $("#createAnswer").focus()
  $("#addImagery").focus()
  $("#successAlert").toggle()
  $("#errorAlert").toggle()

  //Landing Page
  $("#signUpButton").click(function () {
    $("#signUpButton").toggle()
    $("#card2").toggle()
  })

  let = emailLocalPart = ""

  $("#letsGo").click(function () {
    let emailLength = $("#letsGoEmailInput").val().length
    let passwordLength = $("#letsGoPassword").val().length
    let email = $("#letsGoEmailInput").val()
    let password = $("#letsGoPassword").val()

    let emailLocalPart = email.split("@")[0]
    let emailSet = new Set(emailLocalPart)

    let valid = false

    if (emailLength === 0) {
      $("#letsGoEmailError").html("Please enter your email address.")

      $("#letsGoEmailInput").addClass("is-invalid")
      valid = false
    } else if (emailSet.size < 3) {
      $("#letsGoEmailError").html("Please enter a valid email address.")

      $("#letsGoEmailInput").addClass("is-invalid")
      valid = false
    } else {
      $("#letsGoEmailError").html("")
      $("#letsGoEmailInput").removeClass("is-invalid")
      $("#letsGoEmailInput").addClass("is-valid")

      valid = true
    }
    if (passwordLength === 0) {
      $("#letsGoPasswordError").html("Please enter your password.")
      $("#letsGoPassword").addClass("is-invalid")
      valid = false
    } else if (passwordLength <= 9) {
      $("#letsGoPasswordError").html(
        "Your password must be at least 9 characters."
      )
      $("#letsGoPassword").addClass("is-invalid")
      valid = false
    } else if (password.includes(emailLocalPart)) {
      $("#letsGoPasswordError").html(
        "Your email address cannot be used in your password."
      )
      $("#letsGoPassword").addClass("is-invalid")
      valid = false
    } else if (commonPasswords.includes(password)) {
      $("#letsGoPasswordError").html("Your password is to common.")
      $("#letsGoPassword").addClass("is-invalid")
      valid = false
    } else {
      $("#letsGoPasswordError").html("")
      $("#letsGoPassword").removeClass("is-invalid")
      $("#letsGoPassword").addClass("is-valid")
      valid = true
    }
    if (valid) {
      let myDate = new Date()

      createdOn(myDate)

      console.log({
        _id: idPad + idMilli,
        email: email,
        password: password,
        createdOn: finalDate,
      })
    }
  })

  $("#edit").click(function () {
    window.location.href = "./edit.html"
  })
  $("#showDelete").click(function () {
    $("#deleteBtn").toggle()
  })
  // $("#backToAnswer").click(function () {
  //   window.location.href = "./create-answer.html"
  // })
  $("#createNew").click(function () {
    window.location.href = "./create-answer.html"
  })
  $("#review").click(function () {
    window.location.href = "./review-imagery.html"
  })
  $("#allcards").click(function () {
    window.location.href = "./all-cards.html"
  })
  $("#logOut").click(function () {
    window.location.href = "./index.html"
  })
  $("#showAnswer").click(function () {
    window.location.href = "./review-answer.html"
  })
  $("#needsWork").click(function () {
    window.location.href = "./review-empty.html"
  })
  $("#gotIt").click(function () {
    window.location.href = "./review-empty.html"
  })
  $("#revPrevCard").click(function () {
    window.location.href = "./review-answer.html"
  })
  $("#getMoreCards").click(function () {
    window.location.href = "./review-imagery.html"
  })
  $("#discardChanges").click(function () {
    window.location.href = "./all-cards.html"
  })
  $("#editSave").click(function () {
    window.location.href = "./all-cards.html"
  })

  //Create Imagery
  $("#addImagery").keyup(function () {
    let Imacount = $("#addImagery").val().length
    $("#imageryCount").html(`${Imacount}/240`)
    if (Imacount > 240) {
      $("#imageryCount").addClass("text-danger")
    } else {
      $("#imageryCount").removeClass("text-danger")
    }
    if (Imacount === 0 || Imacount > 240) {
      $("#save").attr("disabled", true)
    } else {
      $("#save").removeAttr("disabled", false)
    }
  })
  $("#save").click(function () {
    let finalCount = $("#addImagery").val().length
    let finalImagery = $("#addImagery").val()
    let finalAnswer = $("#answerBody").html()

    let myDate = new Date()
    createdOn(myDate)

    if (finalCount !== 0 && finalCount <= 240) {
      console.log({
        _id: idPad + idMilli,
        imagery: `?x=${encodeURIComponent(finalImagery)}`,
        answer: `?x=${encodeURIComponent(finalAnswer)}`,
        levelNum: 1,
        successfulAttemptsNum: 0,
        createdOn: finalDate,
        lastAttemptedOn: finalDate,
      })
    }
  })

  //Create Answer
  $("#createAnswer").keyup(function () {
    let Anscount = $("#createAnswer").val().length
    $("#answerCount").html(`${Anscount}/240`)

    if (Anscount === 0 || Anscount > 240) {
      $("#createNextBtn").attr("disabled", true)
      $("#answerCount").addClass("text-danger")
    } else {
      $("#createNextBtn").attr("disabled", false)
      $("#answerCount").removeClass("text-danger")
      $("#createNextBtn").click(function () {
        window.location.href = "./create-imagery.html"
      })
    }
  })

  // //alert notices
  // $("#save").click(function () {
  //   $("#successAlert").slideDown()
  // })
  // $("#backToAnswer").click(function () {
  //   $("#errorAlert").slideDown()
  // })
  let finalDate = ""
  let idPad = ""
  let idMilli = ""
  function createdOn(myDate) {
    let year = myDate.getFullYear()
    let splitYear = year.toString().split("")
    let finalYear = splitYear[2] + splitYear[3]
    let month = myDate.getMonth() + 1
    if (month < 10) {
      month = "0" + month
    }
    let day = myDate.getDate()
    if (day < 10) {
      day = "0" + day
    }
    let hours = myDate.getHours()
    if (hours > 12) {
      hours = hours - "12"
    }
    if (hours < 10) {
      hours = "0" + hours
    }
    let minutes = myDate.getMinutes()
    if (minutes < 10) {
      minutes = "0" + minutes
    }
    let seconds = myDate.getSeconds()
    if (seconds < 10) {
      seconds = "0" + seconds
    }
    idPad = Math.floor(Math.random() * 999).toString()
    idMilli = myDate.getMilliseconds().toString()
    if (idPad.length === 1) {
      idPad += "00"
    } else if (idPad.length === 2) {
      idPad += "0"
    }
    if (idMilli.length === 1) {
      idMilli += "00"
    } else if (idMilli.length === 2) {
      idMilli += "0"
    }
    finalDate = finalYear + month + day + hours + minutes + seconds
  }
})
// let finalArr = []
// // start for charcode for password
// for (let i = 0; i < password.length; i++) {
//   if (password[i] === password[i].toUpperCase()) {
//     let letter = password[i]
//     let charCode = letter.charCodeAt(i)
//     let newCharCode = charCode + 1
//     finalArr.push(String.fromCharCode(newCharCode))
//   } else {
//     let upper = password[i].toUpperCase()
//     let charCode2 = upper.charCodeAt(i)
//     let newCharCode2 = charCode2 + 1
//   }
//   let charCode = upper.charCodeAt(i)
//   let newCharCode = charCode + 1
//   console.log(String.fromCharCode(newCharCode))
// }
