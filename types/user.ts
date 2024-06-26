enum UserRole {
  Organizer = "Organizer",
  Customer = "Customer",
}

// User interface
export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  profile_picture?: string;
  role: UserRole;
  referral_code: string;
  points: number;
  created_at: Date;
  updated_at: Date;
}
