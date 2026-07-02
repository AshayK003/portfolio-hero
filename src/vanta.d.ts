declare module "vanta/dist/vanta.net.min" {
  const VantaNet: (options: Record<string, unknown>) => { destroy: () => void }
  export default VantaNet
}
