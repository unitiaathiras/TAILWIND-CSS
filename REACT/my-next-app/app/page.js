import Image from 'next/image'
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Card from './components/card';




export default function Home() {
 
    const cardsData = [
      { title:'Website TRaffic',content:'content1',backgroundColor: 'yellow'},
      { title:'Website TRaff',content:'content2',backgroundColor: 'yellow'},
      { title:'Website TRaffic',content:'content3',backgroundColor: 'green'},
      { title:'Website TRaffic',content:'content4',backgroundColor: 'yellow'},
      { title:'Website TRaffic',content:'content5',backgroundColor: 'yellow'},
      { title:'Website TRaffic',content:'content2',backgroundColor: 'yellow'}
    ];
    
  
  return (
    <main className="min-h-screen bg-black">
      {
        <div className='flex'>
          <Sidebar />
          <div className='flex flex-col w-full'>
          <Navbar />
         
  
          <div className='justify-around mt-4'>
        <Card cardsData={cardsData} className="mb-4 col-lg-3"/>
       
        </div>
        </div>
        </div>
      }
    </main>
  )
}
