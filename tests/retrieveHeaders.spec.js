
import {test,expect} from '@playwright/test'

test.describe("iTechNotation Application", ()=>{
    test("Retrieve all the headers", async({page})=>{
        await page.goto("https://itechnotion.com/what-will-be-the-cost-of-an-app-like-justdial-its-indias-no-1-local-business-directory/")
        const main_heading=await page.locator("//header/h3")

        //here we can validate partial text by using method toContainText()
        await expect(main_heading).toContainText("What will be the cost of an app")
        
        const sub_heading=await page.locator("//div[@class='title-wrap']/h5").allTextContents()
        
       for(let i=0;i<sub_heading.length-1;i++){
        console.log(i+1 +" "+sub_heading[i])
       }
    })

    test("Click on Products and Select vDoctor", async({page})=>{
        await page.goto("https://itechnotion.com/what-will-be-the-cost-of-an-app-like-justdial-its-indias-no-1-local-business-directory/")
        await page.waitForLoadState()
        await page.locator("(//a[text()='Products'])[2]").click()
        
        const dropdown_element=page.locator("(//a[text()='Poros'])[2]")
        await expect(dropdown_element).toBeVisible()
        
        const v_Doctor=page.locator("(//a[text()='vDoctor'])[2]")
        await v_Doctor.click()
        await expect(page).toHaveURL("https://startupfo.rest/white-label-telemedicine-app/")

    })

    test("Retrieve all the technologies in vDoctor page",async({page})=>{
        await page.goto("https://itechnotion.com/what-will-be-the-cost-of-an-app-like-justdial-its-indias-no-1-local-business-directory/")
        await page.waitForLoadState()
        await page.locator("(//a[text()='Products'])[2]").click()
        const dropdown_element=page.locator("(//a[text()='Poros'])[2]")
        await expect(dropdown_element).toBeVisible()
        const v_Doctor=page.locator("(//a[text()='vDoctor'])[2]")
        await v_Doctor.click()
        await expect(page).toHaveURL("https://startupfo.rest/white-label-telemedicine-app/")
        await page.waitForLoadState()
        const v_Doctor_technologies=await page.locator("(//ul[@class='list-unstyled text-muted'])[3]/li").allTextContents()
        for(let i=0;i<=v_Doctor_technologies.length;i++){
            console.log(i+1+" "+v_Doctor_technologies[i])
        }
    })

    test.only("Retrieve all the Features in vDoctor page",async({page})=>{
        await page.goto("https://itechnotion.com/what-will-be-the-cost-of-an-app-like-justdial-its-indias-no-1-local-business-directory/")
        await page.waitForLoadState()
        await page.locator("(//a[text()='Products'])[2]").click()
        const dropdown_element=page.locator("(//a[text()='Poros'])[2]")
        await expect(dropdown_element).toBeVisible()
        const v_Doctor=page.locator("(//a[text()='vDoctor'])[2]")
        await v_Doctor.click()
        await expect(page).toHaveURL("https://startupfo.rest/white-label-telemedicine-app/")
        await page.waitForLoadState()
        const feature_menu_button= page.locator("//a[text()='Features']")
        await feature_menu_button.click()
        const v_Doctor_features=await page.locator("//div[@class='media-body']/h4").allTextContents()
        for(let i=0;i<=v_Doctor_features;i++){
            console.log(i+1+" "+v_Doctor_features[i])
        }

    })

    
})