var modalToggle = document.querySelectorAll('[data-toggle="modal"]');
var modalDismiss = document.querySelectorAll('[data-dismiss="modal"]');
var modalBg = document.createElement("div");
modalBg.classList.add("modal-bg");
if (modalToggle.length) {
  modalToggle.forEach(function (modalToggleItem) {
    modalToggleItem.addEventListener("click", function (e) {
      e.preventDefault();
      var modalTarget = e.target.dataset.target;
      var modalTargetNode = document.querySelector(modalTarget);
      if (modalTargetNode !== null) {
        //Lấy duration
        var duration = modalTargetNode.dataset.duration ?? 200;
        modalTargetNode.style.transition = `top ${duration}ms linear`;

        //Xử lý bật modal
        modalTargetNode.classList.add("open");

        //Tạo modal bg

        setTimeout(function () {
          document.body.appendChild(modalBg);
        }, duration);
      }
    });
  });
}

if (modalDismiss.length) {
  modalDismiss.forEach(function (dismissItem) {
    dismissItem.addEventListener("click", function (e) {
      e.preventDefault();
      var activeModal = document.querySelector(".modal.open");
      if (activeModal !== null) {
        activeModal.classList.remove("open");
        document.body.removeChild(modalBg);
      }
    });
  });
}

document.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    var activeModal = document.querySelector(".modal.open");
    if (activeModal !== null) {
      activeModal.classList.remove("open");
      document.body.removeChild(modalBg);
    }
  }
});

modalBg.addEventListener("click", function () {
  var activeModal = document.querySelector(".modal.open");
  if (activeModal !== null) {
    activeModal.classList.remove("open");
    document.body.removeChild(modalBg);
  }
});

document.addEventListener("mousedown", function (e) {
  console.log(e);
});
