// contact.component.ts
import { Component } from '@angular/core';
import { EmailService } from '../../service/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private emailService: EmailService) {}

  sendMessage() {
    const templateParams = {
      from_name: this.contact.name,
      from_email: this.contact.email, // Inclui o e-mail do usuário na mensagem
      message: this.contact.message
    };

    this.emailService.sendEmail(templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensagem enviada com sucesso!');
        this.resetForm(); // Limpa os campos do formulário após o envio
      }, (error) => {
        console.error('FAILED...', error);
        alert('Erro ao enviar mensagem. Verifique suas configurações e tente novamente.');
      });
  }

  resetForm() {
    this.contact = {
      name: '',
      email: '',
      message: ''
    };
  }
}
