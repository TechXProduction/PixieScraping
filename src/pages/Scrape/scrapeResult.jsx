import React from 'react';
import {
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Paper,
 Box,
} from '@mui/material';

//-------------------- Components --------------------------
import MapComponent from './mapComponent';

//-------------------- Assets --------------------------
const accessToken = import.meta.env.VITE_MAPS_GOO_API_KEY;

/////////////////////////////////
const ScrapeResult = (data) => {
 const { scrapingResult, dbResult } = data.data;

 console.log('scrapResult: ', scrapingResult);
 console.log('resultDb: ', dbResult);

 const position = [51.505, -0.09];

 return (
  <>
   {/* ScrapingResult result */}
   <TableContainer
    component={Paper}
    sx={{ overflowX: 'auto', maxWidth: '100%', margin: '2em' }}>
    <Table>
     <TableHead>
      <TableRow>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
         bgcolor: 'GrayText',
        }}>
        N° exp.
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        Año
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        Secretaria
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        Partes
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        Sistesis del resultado
       </TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {scrapingResult.map((row, index) => (
       <TableRow key={index}>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.asunto ? row.asunto : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.año ? row.año : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.secretaria ? row.secretaria : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.partes ? row.partes : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.sistesisResultado ? row.sistesisResultado : '-'}
        </TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </TableContainer>
   {/* DB result */}
   <TableContainer
    component={Paper}
    sx={{
     overflowX: 'auto',
     maxWidth: '100%',
     margin: '2em',
    }}>
    <Table>
     <TableHead>
      <TableRow>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
         bgcolor: 'GrayText',
        }}>
        ID
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        PROPIE
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        OBJECTID
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        UBICACION
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        RM
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        NCN
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        LOTE
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        CCAT
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        NOF
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        OBSERVACIO
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        USO
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        OBS_CAMPO
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        MANZANA
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        FECHA_MOV
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        MODIFICO
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        CVE_CAT_ES
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        SHAPE_AREA
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        PRKCCLAVEC
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        AREA
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        ESTADO
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        CVECATAS
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        NUMOFI
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        COLONIA
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        CP
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        POBLACION
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        RAZONSOCIA
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        ESTADO_1
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        CVECATAS_1
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        NOTIFICAR
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        COL
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        POB
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        TIPOPR
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        STATUSLEGA
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        ANOTACION
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        RPP
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        REGIMEN
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        CVECATAS_2
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        TERRENO
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        TOTAL
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        ESTADO_12
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        CVECATAS_3
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        SUPERFICIE
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        VTOTAL
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        ESTADO__13
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        CVECATAS_4
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        CONSTR
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        VALTOT
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        CVECATAS_5
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        NUMREGPUB
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        FECHAREGPU
       </TableCell>
       <TableCell
        sx={{
         minWidth: 150,
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
        }}>
        NUMESCRITU
       </TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {dbResult.map((row, index) => (
       <TableRow key={index}>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.id ? row.id : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.PROPIE ? row.PROPIE : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.OBJECTID ? row.OBJECTID : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.UBICACION ? row.UBICACION : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.RM ? row.RM : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.NCN ? row.NCN : '-'}
        </TableCell>
        {/* ... Renderizar las celdas para el resto de las columnas ... */}
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.LOTE ? row.LOTE : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.CCAT ? row.CCAT : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.NOF ? row.NOF : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.OBSERVACIO ? row.OBSERVACIO : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.USO ? row.USO : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.OBS_CAMPO ? row.OBS_CAMPO : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.MANZANA ? row.MANZANA : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.FECHA_MOV ? row.FECHA_MOV : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.MODIFICO ? row.MODIFICO : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.CVE_CAT_ES ? row.CVE_CAT_ES : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.SHAPE_AREA ? row.SHAPE_AREA : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.SHAPE_LEN ? row.SHAPE_LEN : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.PRKCCLAVEC ? row.PRKCCLAVEC : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.AREA ? row.AREA : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.ESTADO ? row.ESTADO : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.CVECATAS ? row.CVECATAS : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.NUMOFI ? row.NUMOFI : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.COLONI ? row.COLONI : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.CP ? row.CP : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.POBLACION ? row.POBLACION : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.RAZONSOCIA ? row.RAZONSOCIA : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.ESTADO_1 ? row.ESTADO_1 : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.CVECATAS_1 ? row.CVECATAS_1 : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.NOTIFICAR ? row.NOTIFICAR : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.COL ? row.COL : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.POB ? row.POB : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.TIPOPR ? row.TIPOPR : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.STATUSLEGA ? row.STATUSLEGA : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.ANOTACION ? row.ANOTACION : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.RPP ? row.RPP : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.REGIMEN ? row.REGIMEN : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.CVECATAS_2 ? row.CVECATAS_2 : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.TERRENO ? row.TERRENO : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.TOTAL ? row.TOTAL : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.ESTADO_12 ? row.ESTADO_12 : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.CVECATAS_3 ? row.CVECATAS_3 : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.SUPERFICIE ? row.SUPERFICIE : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.VTOTAL ? row.VTOTAL : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.ESTADO__13 ? row.ESTADO__13 : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.CVECATAS_4 ? row.CVECATAS_4 : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.CONSTR ? row.CONSTR : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.VALTOT ? row.VALTOT : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.CVECATAS_5 ? row.CVECATAS_5 : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.NUMREGPUB ? row.NUMREGPUB : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.FECHAREGPU ? row.FECHAREGPU : '-'}
        </TableCell>
        <TableCell
         sx={{
          minWidth: 150,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         }}>
         {row.NUMESCRITU ? row.NUMESCRITU : '-'}
        </TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </TableContainer>
   {/* Map */}
   <Box
    sx={{ margin: '2em', width: '100%' }}
    component='div'>
    {/* Renderiza los polígonos */}
    {dbResult.map((item, index) => (
     <MapComponent
      key={index}
      geometry={item.geometry}
      apiKey={accessToken}
     />
    ))}
   </Box>
  </>
 );
};

export default ScrapeResult;
