import React from 'react'
import EventsCard from '@/components/EventsCard'
import fs from 'fs';
import path from 'path';

function page() {


  const eventsDir = path.join(process.cwd(), 'public', 'events_summary');
  // console.log('dir : ' ,eventsDir);
  const eventFolders = fs.readdirSync(eventsDir).filter(folder =>
    fs.statSync(path.join(eventsDir, folder)).isDirectory()
  );
  // console.log('folders ' , eventFolders);

  const events = eventFolders.map(folder => {
    const folderPath = path.join(eventsDir, folder);

    // 1. Description text
    let description = '';
    const descPath = path.join(folderPath, 'description.txt');
    if (fs.existsSync(descPath)) {
      description = fs.readFileSync(descPath, 'utf-8');
    }

    // 2. Find first image in the folder
    const imageFile = fs.readdirSync(folderPath).find(file =>
      file.match(/\.(png|jpg|jpeg|webp)$/i)
    );
    console.log('getted img : ' , imageFile);
    const imagePath = imageFile ? `/events_summary/${folder}/${imageFile}` : null;

    // 3. Add to array
    return {
      title: folder.replace(/[-_]/g, ' ').toUpperCase(),
      folder : folder,
      description,
      image: imagePath,
      open : false,

    };
  });
  
  return (
    <div>
      <h1 className="text-4xl text-center my-8 fraunces">Highlights from our past events</h1>
      <EventsCard events={events} />
    </div>
  )
}

export default page
