declare module 'nuwa-components/dist/*' {
  const x: React.FC;
  export default x;
}

declare module '*.less' {
  const styles: { [className: string]: string }
  export = styles;
}

