import {HomeBodyDiv, TextTest, ViewDiv,ContentViewDiv} from './HomeStyled';
import { Header } from '../../components/header/Header';
import { DashBoard } from '../../components/dashBoard/DashBoard';

export function Home(){
    return(
        <HomeBodyDiv>
            <Header />
            <ViewDiv>
            <DashBoard/>
             <ContentViewDiv>
           
                
             </ContentViewDiv>   
            </ViewDiv>
        </HomeBodyDiv>
    )
}