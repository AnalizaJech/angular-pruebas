import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-prod-dialogo',
  imports: [
    MatDialogTitle,
  MatDialogContent,
  MatInputModule,
  MatDialogModule,
  MatFormFieldModule,
  NgIf,
  MatButton,
  ReactiveFormsModule,
  ],
  templateUrl: './prod-dialogo.component.html',
  styleUrl: './prod-dialogo.component.css'
})
export class ProdDialogoComponent {
  data = inject(MAT_DIALOG_DATA);
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProdDialogoComponent>,
    private productoService: ProductoService
  ) {
    this.productForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.minLength(4)],
      imagenUrl: [''],
      isOferta: [false],
      porcentaje: [0],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const newProduct = {
        id: Date.now(),
        ...this.productForm.value,
      };
      this.productoService.addProduct(newProduct);
      this.dialogRef.close(true);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
