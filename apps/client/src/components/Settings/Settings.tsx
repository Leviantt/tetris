import { Box, Paper, Typography, RadioGroup, FormControlLabel, Radio, Button , Switch, Grid} from '@mui/material'
import React, { useState } from 'react'

export const Settings = () => {
  const [selectedValue, setSelectedValue] = useState<string>('1');
  const [music, setMusic] = useState<boolean>(true);
  const [gridVisibility, setGridVisibility] = useState<boolean>(true);
  const [selectedColor, setSelectedColor] = useState<string>('Red');
  const [selectedVariantValue, setSelectedVariantValue] = useState<string>('points');

  const ColorBox = ({color}:{color:string}) => (
    <Box width={90} height={90} bgcolor={color} mb={1} />
  )

  const handleSaveSettings = () => {
    //
  };
  const handleChangeMusic = (event: React.ChangeEvent<HTMLInputElement>) => {
   setMusic(event.target.checked );
  };
  const handleChangeGridVisibility = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGridVisibility(event.target.checked);
   };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight='90vh'
    >      
      <Paper elevation={3} sx={{width : '800px', display:"flex", flexDirection:"column", alignItems:"flex-start", padding: "40px"}}>
         <Box >
          <Typography variant='h5' fontWeight='bold'>Настройки игры</Typography>
            <Typography mb={2}>Ваши предпочтения для интересной и комфортной игры</Typography>
            <Typography fontWeight='bold'>Уровень сложности игры</Typography>
            <Typography>Выберите уровень, с которого начинается игра</Typography>
            <Box display='flex' justifyContent='space-between' alignItems='flex-end'>               
               <RadioGroup value={selectedValue} onChange={(e)=>{setSelectedValue(e.target.value);}}>
                  <FormControlLabel value="1" control={<Radio />} label="Первый уровень" />
                  <FormControlLabel value="2" control={<Radio />} label="Второй уровень" />
                  <FormControlLabel value="3" control={<Radio />} label="Третий уровень" />
               </RadioGroup>             
            </Box>   
            <Typography gutterBottom fontWeight='bold'>Выберите цвет фона</Typography>
              <RadioGroup sx={{display: 'flex', flexDirection: 'row'}} value={selectedColor} onChange={(e)=>{setSelectedColor(e.target.value);}}>
                <FormControlLabel sx={{display: 'flex', flexDirection: 'column-reverse', margin: '0 20px 0 0'}} value="Red" control={<Radio />} label={<ColorBox  color="Red" />} />
                <FormControlLabel sx={{display: 'flex', flexDirection: 'column-reverse', margin: '0 20px 0 0'}}  value="Green" control={<Radio />} label={<ColorBox color="Green"/>} />
                <FormControlLabel sx={{display: 'flex', flexDirection: 'column-reverse', margin: '0 20px 0 0'}} value="Blue" control={<Radio />} label={<ColorBox color="Blue" />} />
                <FormControlLabel sx={{display: 'flex', flexDirection: 'column-reverse', margin: '0 20px 0 0'}} value="Blue" control={<Radio />} label={<ColorBox color="Pink" />} />
                <FormControlLabel sx={{display: 'flex', flexDirection: 'column-reverse', margin: '0 20px 0 0'}} value="Blue" control={<Radio />} label={<ColorBox color="Yellow" />} />
              </RadioGroup> 
              <Typography fontWeight='bold'>Способ определения результата</Typography>
              <Typography>Выберите как Вы хотите играть: на время или на очки</Typography>
              <Box display='flex' justifyContent='space-between' alignItems='flex-end'>               
                <RadioGroup value={selectedVariantValue} onChange={(e)=>{setSelectedVariantValue(e.target.value);}}>
                    <FormControlLabel value="points" control={<Radio />} label="На очки" />
                    <FormControlLabel value="time" control={<Radio />} label="На время" />
                </RadioGroup>               
              </Box> 
              <Typography gutterBottom fontWeight='bold'>Музыка и сетка</Typography>
              <Typography>Выберите: воспроизводить музыку и показывать ли сетку,</Typography>
              <Typography mb={1}>если она доступна</Typography>      
              <Grid  container direction="column" spacing={3}  sx={{width : '100%'}}>
                <Grid item container justifyContent="flex-start" alignItems="center">
                  <Grid item xs={8}>
                    <Typography>Музыкальное сопровождение</Typography>
                  </Grid>                  
                  <Grid item>
                      <Switch
                          checked={music}
                          onChange={handleChangeMusic}
                          inputProps={{ 'aria-label': 'controlled' }}
                          name="checked"
                        />      
                  </Grid> 
                </Grid>
                <Grid item container mb={2} justifyContent="flex-start" alignItems="center">
                  <Grid item xs={8}>
                    <Typography >Отображение сетки (если доступна)</Typography>
                  </Grid> 
                  <Grid item>
                    <Switch
                        checked={gridVisibility}
                        onChange={handleChangeGridVisibility}
                        inputProps={{ 'aria-label': 'controlled' }}
                        name="checked"
                      />      
                  </Grid>                        
                </Grid>
                <Button sx={{height: '50px', width: '200px', margin: '0 auto'}} variant="contained" onClick={handleSaveSettings}>
                  Сохранить
                </Button>  
              </Grid>                                
         </Box>         
         
      </Paper>
   </Box>   
  )
}
