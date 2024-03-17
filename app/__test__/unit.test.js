import { isStrong } from "@/utils/utils";
// isStrong password test 


test("isStrong should return true" , ()=>{
    expect(isStrong('Tamim+58+MITR+$')).toBe(true)
})


