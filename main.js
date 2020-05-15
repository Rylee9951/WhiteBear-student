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
    let emailLength = $("#lestGoEmailInput").val().length
    let passwordLength = $("#letsGoPassword").val().length
    let email = $("#lestGoEmailInput").val()
    let password = $("#letsGoPassword").val()

    let = emailLocalPart = email.split("@")[0]

    let valid = false

    if (emailLength === 0) {
      $("#letsGoEmailError").html("Please enter your email address.")
      $("#lestGoEmailInput").addClass("border-danger")
      valid = false
    } else {
      $("#letsGoEmailError").html("")
      $("#lestGoEmailInput").removeClass("border-danger")
      valid = true
    }
    if (passwordLength === 0) {
      $("#letsGoPasswordError").html("Please enter your password.")
      $("#letsGoPassword").addClass("border-danger")
      valid = false
    } else if (passwordLength <= 9) {
      $("#letsGoPasswordError").html(
        "Your password must be at least 9 characters."
      )
      $("#letsGoPassword").addClass("border-danger")
      valid = false
    } else if (password.includes(emailLocalPart)) {
      $("#letsGoPasswordError").html(
        "Your email address cannot be used in your password."
      )
      $("#letsGoPassword").addClass("border-danger")
      valid = false
    } else {
      $("#letsGoPasswordError").html("")
      $("#letsGoPassword").removeClass("border-danger")
      valid = true
    }
    if (valid) {
      let myDate = new Date()
      let date = Date.now()
      let idPad = Math.floor(Math.random() * 999).toString()
      let idMilli = myDate.getMilliseconds().toString()
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

      console.log({
        _id: idPad + idMilli,
        email: email,
        password: password,
        createdOn: date,
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
      $("#save").attr("disable")
    } else {
      $("#save").removeAttr("disable")
    }
  })
  $("#save").click(function () {
    let finalCount = $("#addImagery").val().length
    let finalImagery = $("#addImagery").val()
    let finalAnswer = $("#answerBody").html()
    let myDate = new Date()
    let date = Date.now()
    let idPad = Math.floor(Math.random() * 999).toString()
    let idMilli = myDate.getMilliseconds().toString()
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

    if (finalCount !== 0 && finalCount < 240) {
      console.log({
        _id: idPad + idMilli,
        imagery: finalAnswer,
        answer: finalImagery,
        levelNum: 1,
        successfulAttemptsNum: 0,
        createdOn: date,
        lastAttemptedOn: date,
      })
    }
  })

  //Create Answer
  $("#createAnswer").keyup(function () {
    let Anscount = $("#createAnswer").val().length
    $("#answerCount").html(`${Anscount}/240`)
    if (Anscount > 240) {
      $("#answerCount").addClass("text-danger")
    }
    if (Anscount === 0 || Anscount > 240) {
      $("#createNextBtn").attr("disable")
    } else {
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
})
