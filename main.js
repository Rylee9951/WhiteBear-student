$(document).ready(function () {
  $("#card2").toggle()
  $("#deleteBtn").toggle()
  $("#createAnswer").focus()
  $("#addImagery").focus()
  $("#successAlert").toggle()
  $("#errorAlert").toggle()
  $("#signUpButton").click(function () {
    $("#signUpButton").toggle()
    $("#card2").toggle()
  })
  $("#createNextBtn").click(function () {
    window.location.href = "./create-imagery.html"
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
  //use keyup to get character count in real time for answer
  $("#createAnswer").keyup(function () {
    let count = $("#createAnswer").val().length
    $("#answerCount").html(`${count}/240`)
  })
  //use keyup to get character count in real time for imagery
  $("#addImagery").keyup(function () {
    let count = $("#addImagery").val().length
    $("#imageryCount").html(`${count}/240`)
  })
  //alert notices
  $("#save").click(function () {
    $("#successAlert").slideDown()
  })
  $("#backToAnswer").click(function () {
    $("#errorAlert").slideDown()
  })
})
