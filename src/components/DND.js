import data from './data';
import { DragDropContext, Droppable,Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import { Container, Row,Card } from "reactstrap";



function DND() {
    const [items, setItems] = useState(data)


    

    const dataMap = items.map((el, i) => {
      return(
        
          
        <Draggable  key={el.id} draggableId={el.id.toString()} index={i}>
          {(provided) =>{
            return(
                
              
              <div className='Colone'
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                  <p>{i + 1}</p>

                        <Card style={{width:'100%' , padding:50,margin:20 }  }
                        >
                            {el.name}
                          </Card>

              </div>
             
            )
          }}

        </Draggable>
      )
    })

    const handleOnDragEnd = (res) => {
      const itemsCopy = [...items]
      const [reorderItem] = itemsCopy.splice(res.source.index, 1)
      itemsCopy.splice(res.destination.index, 0, reorderItem)
      setItems(itemsCopy)
    }

    return(
      <div className='App'>
        <Container>
        <div className="fadeIn first beTogetherDnd">
                <h2>BeTogether</h2>
                
            </div>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='items'>
              {(provided)=>{
                return(
                    
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {dataMap}
                    {provided.placeholder}
                    <button className="btn btn-success">Submit</button>
                  </div>
                  
                )
              }}
            </Droppable>
          </DragDropContext>
          
        </Container>
      </div>
    )




  }

export default DND;