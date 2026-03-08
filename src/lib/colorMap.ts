// Static color class mappings for Tailwind JIT compatibility
// Dynamic classes like `bg-${color}` are NOT detected by Tailwind's JIT compiler

export const bgColor: Record<string, string> = {
  'neo-green': 'bg-neo-green',
  'neo-red': 'bg-neo-red',
  'neo-blue': 'bg-neo-blue',
  'neo-yellow': 'bg-neo-yellow',
  'neo-pink': 'bg-neo-pink',
  'neo-purple': 'bg-neo-purple',
  'neo-orange': 'bg-neo-orange',
};

export const textColor: Record<string, string> = {
  'neo-green': 'text-neo-green',
  'neo-red': 'text-neo-red',
  'neo-blue': 'text-neo-blue',
  'neo-yellow': 'text-neo-yellow',
  'neo-pink': 'text-neo-pink',
  'neo-purple': 'text-neo-purple',
  'neo-orange': 'text-neo-orange',
};

export const borderColor: Record<string, string> = {
  'neo-green': 'border-neo-green',
  'neo-red': 'border-neo-red',
  'neo-blue': 'border-neo-blue',
  'neo-yellow': 'border-neo-yellow',
  'neo-pink': 'border-neo-pink',
  'neo-purple': 'border-neo-purple',
  'neo-orange': 'border-neo-orange',
};

export const bgColorWithOpacity: Record<string, string> = {
  'neo-green': 'bg-neo-green/20',
  'neo-red': 'bg-neo-red/20',
  'neo-blue': 'bg-neo-blue/20',
  'neo-yellow': 'bg-neo-yellow/20',
  'neo-pink': 'bg-neo-pink/20',
  'neo-purple': 'bg-neo-purple/20',
  'neo-orange': 'bg-neo-orange/20',
};

export const hoverTextColor: Record<string, string> = {
  'neo-green': 'hover:text-neo-green',
  'neo-red': 'hover:text-neo-red',
  'neo-blue': 'hover:text-neo-blue',
  'neo-yellow': 'hover:text-neo-yellow',
  'neo-pink': 'hover:text-neo-pink',
  'neo-purple': 'hover:text-neo-purple',
  'neo-orange': 'hover:text-neo-orange',
};
