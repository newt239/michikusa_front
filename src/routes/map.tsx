import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/map')({
  component: () => <div>Hello /map!</div>
})