import styled from "@emotion/styled"

const Info = styled.div`
    margin: 0 auto;
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: start;
    gap: 1rem;
    margin-top: 3rem;
    
`
const Texto = styled.p`
    font-size:18px;
    span{
        font-weight: 700
    }
`

const Precio = styled.p`
    font-size:24px;
    span{
        font-weight: 700
    }
`

const Imagen = styled.img`
    display:block;
    width: 100px;
`
const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY,LOWDAY,CHANGEPCT24HOUR, IMAGEURL,LASTUPDATE} = resultado
  return (
    <Info>
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio más alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación en las últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>El precio es de: <span>{LASTUPDATE}</span></Texto>
        </div>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen"/>
    </Info>
  )
}

export default Resultado