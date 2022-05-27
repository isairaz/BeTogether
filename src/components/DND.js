import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const MovableItem = ({name,setItems}) => {
    const changeItemColumn = (currentItem, columnName) =>{
        setItems((prevState) =>{
            return prevState.map(e => {
                return {
                    ...e,
                    column: e.name === currentItem.name ? columnName : e.column,
                }
            })
        });
    }



    const [{isDragging}, drag] = useDrag({
      type: 'Our first type',
        item: {name: 'Any custom name' },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if(dropResult && dropResult.name === 'Column 1'){
                changeItemColumn({item, column:'Column 1'})
            } else {
                changeItemColumn({item, column: 'Column 2'} )
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0.4 : 1;

    return (

        <>
        <div ref={drag} className='movable-item' style={{opacity}}>
            {name}

        </div>

      
        </>
    )
}

const Column = ({children, className, title}) => {
    const [, drop] = useDrop({
        accept: 'Our first type',
        drop: () => ({name: title}),
    });

    return (
        <div ref={drop} className={className}>
            {title}
            {children}
        </div>
    )
}

export const DND = () => {

    const [items,setItems] = useState({initialState:  [
        {id: 1,name: 'Item 1', column: 'Column 1'},
        {id: 2,name: 'Item 2',column: 'Column 1'},
        {id: 3,name: 'Item 3', column: 'Column 1'}
    ]});

    const returnItemsForColumn = (columnName) => {
        return items
            .filter((item) => item.column === columnName)
            .map((item, index) => (
                <MovableItem key={item.id}
                             name={item.name}
                             currentColumnName={item.column}
                             setItems={setItems}
                             index={index}
                            
                />
            ))
    }
   

        return (
            <div className='container'>
                <DndProvider backend={HTML5Backend}>
                    <Column title='Column 1' classeName='column first-column'>
                    {returnItemsForColumn({ columnName: 'Column 1'})}
                    </Column>
                    
                    <Column title='Column 2' className='column second-column'>
                        {returnItemsForColumn( {columnName: 'Column 2'})}
                    </Column>
                </DndProvider>
            </div>
        )



    // const [isFirstColumn, setIsFirstColumn] = useState(true);

    // const Item = <MovableItem setIsFirstColumn={setIsFirstColumn}/>;

    // return (
    //     <div className="container">
    //         {/* Wrap components that will be "draggable" and "droppable" */}
    //         <DndProvider backend={HTML5Backend}>
    //             <Column title='All projects' className='column first-column'>
    //                 {isFirstColumn && Item}
    //             </Column>
    //             <Column title='Your favorite projects' className='column second-column'>
    //                 {!isFirstColumn && Item}
    //             </Column>
    //         </DndProvider>
    //     </div>
    // );
}

export default DND;