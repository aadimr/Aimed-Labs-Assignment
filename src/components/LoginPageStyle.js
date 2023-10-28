import styled from "styled-components"

export const Form = styled.form`
height:100vh;
width:100vw;
display:flex;
gap:5rem;
justify-content:center;
align-items:center;
img{
    height:25rem;
}
.Section1{
    display:flex;
    justify-content:center;
    align-items:center;
    width:40rem;
    height:30rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.wrapper{
    width:28rem;
}
h2{
    margin-bottom:1rem;
    width:100%;
    display:flex;
    justify-content:center;
    font-size:2.7rem
}
.email{
    font-size:1.2rem;
}
label{
    font-size:1.2rem;
}
.innerSection1{
    display:flex;
    width:100%
    justify-content:space-between;
    margin-top:.5rem;
    border:1px solid;
}
.changePass{
    color:orange;
    cursor:pointer;
    text-decoration:none
}
span{
    color:orange;
    text-decoration:underline;
    cursor:pointer;
}
.eyeIcon{
    font-size:1.5rem;
    cursor:pointer;
    display:flex;
    margin:.5rem .5rem 0rem 0rem;
}
.innerSection2{
    display:flex;
    justify-content:space-between;
    margin:.5rem 0rem .5rem 0rem;
}
.innerSection3{
    display: flex;
    gap:.5rem;
    flex-direction:column;
    align-items:center;
    margin-top:1.5rem
}


@media (max-width:1200px){
    .Section1{
        display:flex;
        justify-content:center;
        align-items:center;
        width:35rem;
        height:30rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
}

    @media (max-width:1100px){
        .Section1{
            display:flex;
            justify-content:center;
            align-items:center;
            width:30rem;
            height:30rem;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }

        .wrapper{
            width:25rem;
        }
}

@media (max-width:1000px){
    img{
        height:25rem;
        width:15rem;
    }
}

@media (max-width:900px){
    .Section1{
        display:flex;
        justify-content:center;
        align-items:center;
        width:25rem;
        height:30rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .wrapper{
        width:20rem;
    }
}

@media (max-width:800px){
    gap:3rem;
    .Section1{
        display:flex;
        justify-content:center;
        align-items:center;
        width:23rem;
        height:30rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .wrapper{
        width:18rem;
    }
}

@media (max-width:700px){
    img{
        display:none;
    }
    .Section1{
        display:flex;
        justify-content:center;
        align-items:center;
        width:30rem;
        height:30rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .wrapper{
        width:25rem;
    }
}

@media (max-width:550px){
    .Section1{
        display:flex;
        justify-content:center;
        align-items:center;
        width:25rem;
        height:30rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .wrapper{
        width:20rem;
    }
}

@media (max-width:450px){
    .wrapper{
        width:15rem;
    }

    .Section1{
        display:flex;
        justify-content:center;
        align-items:center;
        width:100vw;
        height:30rem;
        box-shadow: none;
    }

    .changePass{
        color:orange;
        cursor:pointer;
        text-decoration:none;
        word-break:break-all;
    }
}

`