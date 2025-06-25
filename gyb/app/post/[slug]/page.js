import EventPage from "@/components/EventPage";
import fs from "fs";
import path from "path";
export default function page({params}) {

  const folder = params.slug;
  const eventsDir = path.join(process.cwd(), 'public', 'events');
  let description = '';
  const descPath = path.join(eventsDir, folder, 'description.txt');
  if (fs.existsSync(descPath)) {
    description = fs.readFileSync(descPath, 'utf-8');
  }
  // console.log('description : ', description);
  const images = fs.readdirSync(path.join(eventsDir, folder)).filter(file =>
    file.match(/\.(png|jpg|jpeg|webp)$/i)
  );

  return (
    <>
      <EventPage
        heading={folder.replace(/[-_]/g, ' ').toUpperCase()}
        description={description}
        images={images.map(img => `/events/${folder}/${img}`)}
      />
    </>
  );
}
