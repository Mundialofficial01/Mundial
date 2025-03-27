function showError() {
Swal.fire({
  position: "top-end",
  type: "warning",
  title: "Pesquise pelo nome ou pela data do vídeo!",
  showConfirmButton: false,
  timer: 1300
});
  }
function showSuccess() {
Swal.fire({
  position: "top-end",
  type: "warning",
  title: "Pesquise pelo nome ou pela versão!",
  showConfirmButton: false,
  timer: 1300
});
  }

function showConfirm() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
}