// email.service.ts
import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  // Substitua com suas credenciais do EmailJS
  private userID = 'WMJ2sKtoL4r_P5nky'; // Seu User ID do EmailJS
  private serviceID = 'service_5bcolap'; // Seu Service ID do EmailJS
  private templateID = 'template_yghtlw8'; // Seu Template ID do EmailJS

  constructor() { }

  sendEmail(templateParams: any): Promise<EmailJSResponseStatus> {
    return emailjs.send(this.serviceID, this.templateID, templateParams, this.userID);
  }
}
