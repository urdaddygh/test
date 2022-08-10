import { useFormik } from "formik";
import React, { useState } from "react";
import { AppliedLine } from "../../../../components/appliedLine/AppliedLine";
import Button from "../../../../components/button/Button";
import Input from "../../../../components/input/Input";
import { list_img } from "../../../../images";
import s from "../newApplied/NewApplied.module.scss";
import ss from "./AppliedTemplate.module.scss";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import { getDiscipline } from "../../../../redux/slices/disciplineSlice";
import { getEvent } from "../../../../redux/slices/eventSlice";
import { postApplicationTemplate } from "../../../../redux/slices/applicationSlice";

export const AppliedTemplate = ({changeTemplate}) => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getDiscipline())
    dispatch(getEvent())
  },[])
  const discipline = useSelector(state=>state.discipline.discipline)
  const event = useSelector(state=>state.event.event)
  console.log(event)
  const [state, setState] = useState(false)
  const [nameOfEvent, setNameOfEvent] = useState("")
  const toggle = () =>{
    setState(!state)
    // setNameOfEvent(name)
  }

  const [cuanShu, setCuanShu] = useState(false)
  const cuanFunc = ()=>{
    setCuanShu(!cuanShu)
  }
  const [cisi, setCisi] = useState(false)
  const cisiFunc =()=>{
    setCisi(!cisi)
  }
  // const disciplineChoiseFunc=(category, is_individual, with_weapon)=>{
    
  //   if(category==="1"&&is_individual===true&&with_weapon===true){
  //     setTraditional("Традиционная, одиночный, с оружием")
  //   } else if(category==="1"&&is_individual===false&&with_weapon===false){
  //     setTraditional("Традиционная, не одиночная, без оружием")
  //   }else if(category==="1"&&is_individual===true&&with_weapon===false){
  //     setTraditional("Традиционная, одиночная, без оружием")
  //   }else if(category==="1"&&is_individual===false&&with_weapon===true){
  //     setTraditional("Традиционная, не одиночная, с оружием")
  //   }

  //   else if(category==="2"&&is_individual===true&&with_weapon===true){
  //     setTraditional("Спортивное, одиночный, с оружием")} 
  //   else if(category==="2"&&is_individual===false&&with_weapon===false){
  //     setTraditional("Спортивное, не одиночная, без оружием")
  //   }else if(category==="2"&&is_individual===true&&with_weapon===false){
  //     setTraditional("Спортивное, одиночная, без оружием")
  //   }else if(category==="2"&&is_individual===false&&with_weapon===true){
  //     setTraditional("Спортивное, не одиночная, с оружием")
  //   }

  //   else if(category==="3"&&is_individual===true&&with_weapon===true){
  //     setTraditional("Дуэлянь, одиночный, с оружием")} 
  //   else if(category==="3"&&is_individual===false&&with_weapon===false){
  //     setTraditional("Дуэлянь, не одиночная, без оружием")
  //   }else if(category==="3"&&is_individual===true&&with_weapon===false){
  //     setTraditional("Дуэлянь, одиночная, без оружием")
  //   }else if(category==="3"&&is_individual===false&&with_weapon===true){
  //     setTraditional("Дуэлянь, не одиночная, с оружием")
  //   }
  // }
  const [cuanshuComplexName, setCuanshuComplexName] = useState("Название комплекса")
  const [cuanShuId, setCuanShuId] = useState("")
  const nameOfDiscipline = (text, id)=> {
    setCuanshuComplexName(text)
    setCuanShuId(id)
    setCuanShu(!cuanShu)
  }
  const [cisiComplexName, setCisiComplexName] = useState("Название комплекса")
  const nameOfCisi = (text)=>{
    setCisiComplexName(text)
    setCisi(!cisi)
  }

  const formik = useFormik({
    initialValues: {
      event:"",
      discipline_1:"",
      discipline_2:"",
  },
    onSubmit: (values) => {
      // dispatch(postApplicationTemplate(values))
      alert(JSON.stringify(values, null, 2));
    },
  });

 
  return (
    <>
      <p className={ss.top_p}>Шаблон на соревнования</p>
      <div className={ss.ralative}>
        <Input
          valueLabel="Мероприятие"
          value={nameOfEvent}
          type="text"
          placeholder="Выберите мероприятие"
          maxWidth="600px"
          minWidth="600px"
          margin="0 0 10px"
        />
        {state === true && (
          <div className={ss.cont_radio}>
            {event.map((el, index)=>(
          <label className={ss.radio} key={index}>
            <p onClick={()=>setNameOfEvent(el.name)}>{el.name}</p>
            <input
              type="radio"
              value={el.id}
              name="event"
              onChange={formik.handleChange}
              className={ss.radio_input}
            />
          </label>
            ))}
         </div>
        )}
        <img src={list_img} className={ss.list_img} onClick={toggle}/>
      </div>
      <div className={ss.table_content}>
        <div className={s.table_title}>
          <p className={s.first_p}>№</p>
          <p className={s.three_hundred_fifty}>ФИО</p>
          <p className={s.hundred_fifty}>Пол</p>
          <p className={s.hundred_fifty}>Возраст</p>
          <p className={s.two_hundred_fifty}>Клуб</p>
          <div className={s.two_hundred_fifty_double}>
            <p className={s.fifty_first}>Цюань шу</p>
            <p className={s.fifty}>{cuanshuComplexName}</p>
            {cuanShu === true && (
          <div className={ss.cont_radio__}>

        {discipline.map((el,index)=>(
          <label className={s.radio__} key={index}>
            {/* {disciplineChoiseFunc(el.category, el.is_individual, el.with_weapon)} */}
            
           
            {el.category===1 &&el.is_individual===true&&el.with_weapon===true&&<p onClick={()=>nameOfDiscipline("Традиционная, одиночный, с оружием", el.id)}>Традиционная, одиночный, с оружием</p>}
            {el.category===1 &&el.is_individual===false&&el.with_weapon===false&&<p onClick={()=>nameOfDiscipline("Традиционная, не одиночная, без оружием", el.id)}>Традиционная, не одиночная, без оружием</p>}
            {el.category===1 &&el.is_individual===true&&el.with_weapon===false&&<p onClick={()=>nameOfDiscipline("Традиционная, одиночная, без оружием", el.id)}>Традиционная, одиночная, без оружием</p>}
            {el.category===1 &&el.is_individual===false&&el.with_weapon===true&&<p onClick={()=>nameOfDiscipline("Традиционная, не одиночная, с оружием", el.id)}>Традиционная, не одиночная, с оружием</p>}
            
            {el.category===2 &&el.is_individual===true&&el.with_weapon===true&&<p onClick={()=>nameOfDiscipline("Спортивное, одиночный, с оружием", el.id)}>Спортивное, одиночный, с оружием</p>}
            {el.category===2 &&el.is_individual===false&&el.with_weapon===false&&<p onClick={()=>nameOfDiscipline("Спортивное, не одиночная, без оружием", el.id)}>Спортивное, не одиночная, без оружием</p>}
            {el.category===2 &&el.is_individual===true&&el.with_weapon===false&&<p onClick={()=>nameOfDiscipline("Спортивное, одиночная, без оружием", el.id)}>Спортивное, одиночная, без оружием</p>}
            {el.category===2 &&el.is_individual===false&&el.with_weapon===true&&<p onClick={()=>nameOfDiscipline("Спортивное, не одиночная, с оружием", el.id)}>Спортивное, не одиночная, с оружием</p>}
            
            {el.category===3 &&el.is_individual===true&&el.with_weapon===true&&<p onClick={()=>nameOfDiscipline("Дуэлянь, одиночный, с оружием", el.id)}>Дуэлянь, одиночный, с оружием</p>}
            {el.category===3 &&el.is_individual===false&&el.with_weapon===false&&<p onClick={()=>nameOfDiscipline("Дуэлянь, не одиночная, без оружием", el.id)}>Дуэлянь, не одиночная, без оружием</p>}
            {el.category===3 &&el.is_individual===true&&el.with_weapon===false&&<p onClick={()=>nameOfDiscipline("Дуэлянь, одиночная, без оружием", el.id)}>Дуэлянь, одиночная, без оружием</p>}
            {el.category===3 &&el.is_individual===false&&el.with_weapon===true&&<p onClick={()=>nameOfDiscipline("Дуэлянь, не одиночная, с оружием", el.id)}>Дуэлянь, не одиночная, с оружием</p>}
            {/* <p>dsa</p> */} 
            <input
              type="radio"
              value={el.id}
              name="discipline_1"
              onChange={formik.handleChange}
              className={ss.radio_input__}
            />
          </label>
        ))}
         </div>
        )}
       {changeTemplate===true &&  <img src={list_img} className={ss.list_img__} onClick={cuanFunc}/>}
          </div>
          <div className={s.two_hundred_fifty_double}>
            <p className={s.fifty_first}>Цисе</p>
            <p className={s.fifty}>{cisiComplexName}</p>

            {cisi === true && (
          <div className={ss.cont_radio__}>

        {discipline.map((el,index)=>(
          <label className={s.radio__} key={index}>
            {/* {disciplineChoiseFunc(el.category, el.is_individual, el.with_weapon)} */}
            <input
              type="radio"
              value={el.id}
              name="discipline_2"
              onChange={formik.handleChange}
              className={ss.radio_input__}
            />
            {el.category===1 &&el.is_individual===true&&el.with_weapon===true&&<p onClick={()=>nameOfCisi("Традиционная, одиночный, с оружием")}>Традиционная, одиночный, с оружием</p>}
            {el.category===1 &&el.is_individual===false&&el.with_weapon===false&&<p onClick={()=>nameOfCisi("Традиционная, не одиночная, без оружием")}>Традиционная, не одиночная, без оружием</p>}
            {el.category===1 &&el.is_individual===true&&el.with_weapon===false&&<p onClick={()=>nameOfCisi("Традиционная, одиночная, без оружием")}>Традиционная, одиночная, без оружием</p>}
            {el.category===1 &&el.is_individual===false&&el.with_weapon===true&&<p onClick={()=>nameOfCisi("Традиционная, не одиночная, с оружием")}>Традиционная, не одиночная, с оружием</p>}
            
            {el.category===2 &&el.is_individual===true&&el.with_weapon===true&&<p onClick={()=>nameOfCisi("Спортивное, одиночный, с оружием")}>Спортивное, одиночный, с оружием</p>}
            {el.category===2 &&el.is_individual===false&&el.with_weapon===false&&<p onClick={()=>nameOfCisi("Спортивное, не одиночная, без оружием")}>Спортивное, не одиночная, без оружием</p>}
            {el.category===2 &&el.is_individual===true&&el.with_weapon===false&&<p onClick={()=>nameOfCisi("Спортивное, одиночная, без оружием")}>Спортивное, одиночная, без оружием</p>}
            {el.category===2 &&el.is_individual===false&&el.with_weapon===true&&<p onClick={()=>nameOfCisi("Спортивное, не одиночная, с оружием")}>Спортивное, не одиночная, с оружием</p>}
            
            {el.category===3 &&el.is_individual===true&&el.with_weapon===true&&<p onClick={()=>nameOfCisi("Дуэлянь, одиночный, с оружием")}>Дуэлянь, одиночный, с оружием</p>}
            {el.category===3 &&el.is_individual===false&&el.with_weapon===false&&<p onClick={()=>nameOfCisi("Дуэлянь, не одиночная, без оружием")}>Дуэлянь, не одиночная, без оружием</p>}
            {el.category===3 &&el.is_individual===true&&el.with_weapon===false&&<p onClick={()=>nameOfCisi("Дуэлянь, одиночная, без оружием")}>Дуэлянь, одиночная, без оружием</p>}
            {el.category===3 &&el.is_individual===false&&el.with_weapon===true&&<p onClick={()=>nameOfCisi("Дуэлянь, не одиночная, с оружием")}>Дуэлянь, не одиночная, с оружием</p>}
            {/* <p>{traditional(el.category, el.is_individual, el.with_weapon)}</p> */}
           
          </label>
        ))}
         </div>
        )}
        {changeTemplate===true && <img src={list_img} className={ss.list_img__} onClick={cisiFunc}/>}
          </div>
          <div className={s.five_hundred}>
            <p className={s.top}>Тайцзи цюань</p>
            <span className={s.under}>
              <p className={s.under_first}>Цюань шу</p>
              <p className={s.under_second}>Цисе </p>
            </span>
            
          </div>
          <p className={s.three_hundred_fifty}>
            Дуйлянь <br /> (ФИО партнера)
          </p>
          <p className={s.two_hundred_fifty}>
            Групповые выступления <br /> (№ команды)
          </p>
          <p className={s.three_hundred_fifty}>Примечание</p>
        </div>
        <AppliedLine
          fullName=""
          club=" "
          gender=""
          age=""
          complex=""
          secondComplex=""
          tsuanshu=""
          tsise=""
          partnerName=""
          numberOfteam=""
          number="1"
          note=""
        />
         <AppliedLine
          fullName=""
          club=" "
          gender=""
          age=""
          complex=""
          secondComplex=""
          tsuanshu=""
          tsise=""
          partnerName=""
          numberOfteam=""
          number="1"
          note=""
        />
         <AppliedLine
          fullName=""
          club=" "
          gender=""
          age=""
          complex=""
          secondComplex=""
          tsuanshu=""
          tsise=""
          partnerName=""
          numberOfteam=""
          number="1"
          note=""
        />
        <div className="margin_for_scroll"></div>
      </div>
      <div className={ss.center}>
        <Button
          width="600px"
          text="СОХРАНИТЬ"
          type="submit"
          disabled={!formik.values.event}
          onClick={formik.handleSubmit}
        />
      </div>
    </>
  );
};
