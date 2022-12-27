import bcrypt from 'bcrypt';

export default async (password: string) => {
  const hashedPwd: string = await bcrypt.hash(password, 10);
  return hashedPwd;
};
