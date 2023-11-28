// appData.ts
interface AppData {
    name: string;
    iconUrl: string;
  }


export const getAppData = (subdomain: string): AppData => {
    console.log('subdomain',subdomain);
    const data: Record<string, AppData> = {
      'hello': {
        name: 'Client 1 App',
        iconUrl: 'https://images.placeholders.dev/?width=200&height=200&text=cc%201%20app&textColor=red',
      },
      'hi': {
        name: 'Client 2 App',
        iconUrl: 'https://images.placeholders.dev/?width=200&height=200&text=cc%202%20app&textColor=blue',
      },
      // Add more client data as needed
    };
    return data[subdomain] || { name: '', iconUrl: '' };
};
