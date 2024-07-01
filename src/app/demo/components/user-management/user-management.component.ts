import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserManagementService } from '../../service/user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {

  editDialog: boolean = false
  addDialog: boolean = false
  loadingMahasiswa: boolean = false

  mahasiswa: any = []
  prodi: any = []
  fakultas: any = []


  selectEditing = {
    ID: null,
    NAMA_MAHASISWA: null,
    NIM: null,
    PRODI: null,
    FAKULTAS: null
  }
  objectDelete: any
  selectedMahasiswa: any[] = []
  temp: any;

  namaMahasiswa_new: any
  nim_new: any
  prodi_new: any


  constructor(
    public userService: UserManagementService,
    public messageService: MessageService,
    public confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.initial_API();
  }

  async initial_API() {
    this.mahasiswa_get();
    this.get_prodi();
    this.get_fakultas();
  }

  get_prodi() {
    const key = 'user123'
    this.userService.prodi_get(key).then(
      (res) => {
        this.prodi = res.data
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }

  get_fakultas() {
    const key = 'user123'
    this.userService.fakultas_get(key).then(
      (res) => {
        this.fakultas = res.data
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }

  mahasiswa_get() {
    this.loadingMahasiswa = true
    const key = 'user123'
    this.userService.mahasiswa_get(key).then(
      (res) => {
        this.mahasiswa = res.data;
        if (this.mahasiswa.length === 0) {
          this.loadingMahasiswa = false
          this.messageService.clear();
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Data Not Found' })
        } else {
          this.loadingMahasiswa = false
        }
      }
    ).catch((error) => {
      this.loadingMahasiswa = false
      this.messageService.clear();
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Data Not Found' })
    })
  }

  editMahasiswa(data) {
    this.selectEditing = { ...data }
    this.editDialog = true
  }

  hideDialog(Mahasiswa) {
    Mahasiswa = null
    this.editDialog = false
    this.addDialog = false
    this.namaMahasiswa_new = null;
    this.nim_new = null;
    this.prodi_new = null;
  }

  savEdit(data) {
    this.selectEditing = data;
    const dataEdit = {
      ID: this.selectEditing.ID,
      NAMA_MAHASISWA: this.selectEditing.NAMA_MAHASISWA,
      NIM: this.selectEditing.NIM,
      PROGDI_ID: this.selectEditing.PRODI.ID,
      FAKULTAS_ID: this.selectEditing.FAKULTAS.ID,
      'X-API-KEY': 'user123'
    }


    let hasUndefined = false;

    for (let key in dataEdit) {
      if (dataEdit[key] === undefined) {
        hasUndefined = true;
        break;
      }
    }

    if (hasUndefined) {
      this.messageService.clear();
      this.messageService.add({ severity: 'warn', summary: 'Warning!', detail: 'Lengkapi Data!' });
    } else {
      this.userService.editMahasiswa_post(dataEdit).then(
        (res) => {
          this.editDialog = false
          this.mahasiswa_get();
          this.messageService.clear();
          this.messageService.add({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil Mengubah Data' })
        }
      ).catch(
        (err) => {
          console.log(err);
          this.editDialog = true
          this.messageService.clear();
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Gagal Mengubah Data' })
        }
      )
    }
  }

  confirmDelete(data) {
    this.objectDelete = data
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        const dataMhs = {
          NIM: this.objectDelete.NIM,
          'X-API-KEY': 'user123'
        }
        if (dataMhs) {
          this.userService.delete_mahasiswa_post(dataMhs).then(
            (res) => {
              this.mahasiswa_get();
              this.messageService.clear();
              this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
            }
          ).catch(
            (err) => {
              console.log(err);
              this.messageService.add({ severity: 'error', summary: 'Gagal', detail: 'Gagal Menghapus Data', life: 3000 });
            })
        }
      }
    });
  }

  tambahMahasiswa() {
    this.addDialog = true
  }

  saveNew() {
    const data = {
      NAMA_MAHASISWA: this.namaMahasiswa_new,
      NIM: this.nim_new,
      FAKULTAS_ID: this.prodi_new.FAKULTAS_ID,
      PROGDI_ID: this.prodi_new.ID,
      'X-API-KEY': 'user123'
    }

    let hasUndefined = false;

    for (let key in data) {
      if (data[key] === undefined) {
        hasUndefined = true;
        break;
      }
    }

    if (hasUndefined) {
      this.messageService.clear();
      this.messageService.add({ severity: 'warn', summary: 'Warning!', detail: 'Lengkapi Data!' })
    } else {
      this.userService.mahasiswa_post(data).then(
        (res: any) => {
          this.addDialog = false;
          this.mahasiswa_get();
          this.namaMahasiswa_new = null;
          this.nim_new = null;
          this.prodi_new = { FAKULTAS_ID: null, ID: null };
          this.messageService.clear();
          this.messageService.add({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil Input Data' })
        }
      ).catch(
        (err) => {
          if (err.status === 406) {
            this.messageService.clear();
            this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Data Sudah Ada!' })
          } else {
            this.namaMahasiswa_new = null;
            this.nim_new = null;
            this.prodi_new = { FAKULTAS_ID: null, ID: null };
            this.addDialog = false
            this.messageService.clear();
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Gagal Input Data' })
          }
        }
      )
    }
  }

  confirmDeleteBorongan() {
    const IDM = this.selectedMahasiswa.map(mahasiswa => mahasiswa.ID)
    const dataSelected = {
      ID: IDM,
      'X-API-KEY': 'user123'
    }
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected record?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.userService.delete_selected_mahasiswa_post(dataSelected).then(
          (res) => {
            console.log(res);
            this.mahasiswa_get();
            this.messageService.clear();
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Records Deleted', life: 3000 });
          }
        ).catch(
          (err) => {
            console.log(err);
          })
      }
    });
  }





}
