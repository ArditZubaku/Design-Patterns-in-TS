//interface ISmartDevice {
  //call(contanct: string): void;
  //sendSMS(contanct: string, content: string): void;
  //openApp(path: string): void;
  //connectToWifi(SSID: string, password: string): void;
//}

// Segreggating - Splitting the interface
interface ISmartDevice {
  openApp(path: string): void;
  connectToWifi(SSID: string, password: string): void;
}

interface IPhoneDevice {
  call(contanct: string): void;
  sendSMS(contanct: string, content: string): void;
}

class SmartPhone implements ISmartDevice, IPhoneDevice {
  call(contanct: string): void {
    console.log('Calling ' + contanct);
  }

  sendSMS(contanct: string, content: string): void {
    console.log('Sending ' + content + ' to ' + contanct);
  }

  openApp(path: string): void {
    console.log('Opening app ' + path);
  }

  connectToWifi(SSID: string, password: string): void {
    console.log(
      'Connecting to WIFI of SSID: ' + SSID + ' with passsword: ' + password,
    );
  }
}

const smartPhone = new SmartPhone();
smartPhone.call('John');
smartPhone.sendSMS('John', 'Test message');
smartPhone.openApp('Facebook');
smartPhone.connectToWifi('MyWorkWIFI', 'cc3cc3a2-39ab-44c9-9036-ef46aa7f110d');

//class Tablet implements ISmartDevice {
  //call(contanct: string): void {
    //throw new Error('This device cannot place a call');
  //}

  //sendSMS(contanct: string, content: string): void {
    //throw new Error('This device cannot connect to a cell phone network');
  //}

  //openApp(path: string): void {
    //console.log('Opening app ' + path);
  //}
  //connectToWifi(SSID: string, password: string): void {
    //console.log(
      //'Connecting to WIFI of SSID: ' + SSID + ' with passsword: ' + password,
    //);
  //}
//}

class Tablet implements IPhoneDevice {
  call(contanct: string): void {
    console.log('Calling ' + contanct);
  }

  sendSMS(contanct: string, content: string): void {
    console.log('Sending ' + content + ' to ' + contanct);
  }
}

const tablet = new Tablet();
tablet.call('John');
tablet.sendSMS('John', 'Test message');
//tablet.openApp('Facebook');
//tablet.connectToWifi('MyWorkWIFI', 'cc3cc3a2-39ab-44c9-9036-ef46aa7f110d');
