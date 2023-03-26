import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private userService: UserService, private snack: MatSnackBar) {}

  public user = {
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  };


  formSubmit() {
    console.log(this.user);
    if (this.user.userName == '' || this.user.userName == null) {
      this.snack.open('Username is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (this.user.password == '' || this.user.password == null) {
      this.snack.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        
        console.log(data);
        //Swal.fire('Successfully done !!', 'User id is ' + data.id, 'success');
      },
      (error) => {
        console.log(error);
        this.snack.open(error.error.text, '', {
          duration: 3000,
        });
      }
    );
  }
}
