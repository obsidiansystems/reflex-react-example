import dynamic from 'next/dynamic';
import Image from 'next/image';

const Test = dynamic(() => import('../components/Test'), {
  ssr: false
})

export default function Home() {
  return (
    <Test/>
  )
}
