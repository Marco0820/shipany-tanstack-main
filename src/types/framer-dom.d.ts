import 'react';

declare module 'react' {
  interface HTMLAttributes<T> {
    /** Framer layer name kept on exported nodes. */
    name?: string;
  }
}
