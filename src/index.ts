type bool = true | false;

export async function func1(arg: bool): Promise<bool> {
  const dummy = null;

  if (dummy) return Promise.resolve(arg);
  return Promise.resolve(arg);
}

void func1(true);
