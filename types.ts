
export interface EmailAccount {
  id: string;
  name: string;
  email: string;
  status: 'Active' | 'Suspended' | 'Pending';
  usage: string;
  createdDate: string;
}

export interface User {
  email: string;
  name: string;
}
