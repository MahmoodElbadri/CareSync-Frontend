import { Injectable, signal } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private hubConnection!: signalR.HubConnection;
  public incomingNotification = signal<string>('');

  constructor() { }

  public startConnection(){
    //app.MapHub<NotificationHub>("/NotificationHub");
    const hubUrl = environment.baseUrl.replace('/api','') +  'notificationHub';
    console.log('Hub Url is : ', hubUrl);
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl(hubUrl, {
      accessTokenFactory: () => localStorage.getItem('token') || '' 
    })
    .withAutomaticReconnect()
    .build();

    this.hubConnection.start().then(() => {
      console.log('Notification hub connected');
    }).catch((err) => {
      console.error('Error connecting to notification hub:', err);
    });

    this.hubConnection.on('ReceiveNewAppoitment',(message: string)=>{
      console.log('Notification received:', message);
      this.incomingNotification.set(message);
    })

    // this.hubConnection.stop().then(()=>{
    //   console.log('Notification hub disconnected');
    // }).catch((err)=>{
    //   console.error('Error disconnecting from notification hub:', err);
    // })
  }
}
