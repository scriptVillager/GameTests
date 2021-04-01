
import * as GameTest from "GameTest";
import { Blocks, BlockLocation } from "Minecraft";
    
function basicTest(test) {
    let cowEntityType = "cow";
    let catEntityType = "cat";
    
    test.spawn(catEntityType, new BlockLocation(4, 3, 3));
    test.spawn(cowEntityType, new BlockLocation(4, 3, 3));
    
    test.succeedWhenEntityPresent(cowEntityType, new BlockLocation(4, 6, 3)); 
}
    

    
GameTest.register("MyProject", "basicTest", basicTest).structureName("gametests:basic");     
