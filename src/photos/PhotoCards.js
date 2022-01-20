import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import PhotoCard from './PhotoCard';

export default function PhotoCards(props) {
  
const [photoData, setPhotoData] = useState(null);
useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
                // we'll update the KEYHERE soon!
        `https://images-api.nasa.gov/search?media_type=image&q=${props.query}`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, [props.query]);

  if (!photoData) return <div />;
  console.log(photoData);


  function createCard(value, index) {
      if (value.data[0].media_type != "video") {
          return (<Grid key={index} item>
          <PhotoCard href={value.links[0].href} 
          title={value.data[0].title}
          description={value.data[0].description}
          date={value.data[0].date_created}
         />
 
        </Grid>);
      } 
  }


  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2} pt="50px" pl="15px" pr="15px">
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={6}>
          {photoData.collection.items.map((value, index) => createCard(value,index))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2}}>
          <Grid container>
            <Grid item>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}