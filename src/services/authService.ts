interface RegisterData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
  
  export const register = async (data: RegisterData): Promise<void> => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Registration failed');
  };