
import { Heading, VStack, Text } from "@chakra-ui/react"

import { useEffect, useState } from "react";
import { get_tasks } from "../endpoints/api";

const Menu = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetchTasks = async () => {
            const tasks = await get_tasks()
            setTasks(tasks)
        }
        fetchTasks();
    }, [])

    return (
        <VStack>
            {tasks.map((task) => {
                return <Text>{task.description}</Text>
            })}
        </VStack>
    )
}

export default Menu;