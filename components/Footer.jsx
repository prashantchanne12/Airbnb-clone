const Footer = () => {
    return (
       <footer className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
           <div className='space-y-4 text-xs text-gray-800'>
              <h5 className='font-bold uppercase'>About</h5>     
               <p>How Airbnb works</p>
               <p>Newsroom</p>
               <p>Investors</p>
               <p>Airbnb Plus</p>
               <p>Airbnb Luxe</p>
           </div>
           
           <div className='space-y-4 text-xs text-gray-800'>
              <h5 className='font-bold uppercase'>Host</h5>     
               <p>Discord</p>
               <p>Newsroom</p>
               <p>Forums</p>
               <p>Guide</p>
               <p>FAQ</p>
           </div>

           <div className='space-y-4 text-xs text-gray-800'>
              <h5 className='font-bold uppercase'>Community</h5>     
               <p>Discord</p>
               <p>Newsroom</p>
               <p>Forums</p>
               <p>Guide</p>
               <p>FAQ</p>
           </div>

           <div className='space-y-4 text-xs text-gray-800'>
              <h5 className='font-bold uppercase'>Support</h5>     
               <p>Help Center</p>
               <p>Trust & Safety</p>
               <p>Say Hi YouTube</p>
               <p>Easter Eggs</p>
               <p>Instagrm</p>
           </div>


       </footer>
    )
}

export default Footer;
