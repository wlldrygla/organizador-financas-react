import styled from "styled-components";

const TitleStyle = styled.h1`
margin:5%;
font-size: 50px;

@media (max-width: 768px){
  font-size: 20px;
}
`

const ParagraphStyle = styled.p`
margin:5%;
font-size: 20px;
`

const SubTïtleStyle = styled.h3`
margin:5%;
font-size:30px;

@media (max-width: 1680px){
  font-size: 30px;
}
@media (max-width: 1440px){
  font-size: 25px;
}
@media (max-width: 1280px){
  font-size: 20px;
}
@media (max-width: 768px){
  font-size: 20px;
}
`

const TextContent = (props) => {
  if(props.type === 'title'){
    return(
      <TitleStyle>{props.content}</TitleStyle>
    )
  }if(props.type === 'paragraph'){
    return(
      <ParagraphStyle>{props.content}</ParagraphStyle>
    )
  }else{
    return(
      <SubTïtleStyle>{props.content}</SubTïtleStyle>
    )
  };  
};

export default TextContent;