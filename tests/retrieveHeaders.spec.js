
import {test,expect} from '@playwright/test'
import {Data, testData} from '../Resources/testData'


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

    test("Retrieve all the Features in vDoctor page",async({page})=>{
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

    
        test.only("Get Quote in vDoctor Page ", async({page})=>{
            await page.goto("https://itechnotion.com/what-will-be-the-cost-of-an-app-like-justdial-its-indias-no-1-local-business-directory/")
            await page.waitForLoadState()
            await page.waitForTimeout(2000)
            await page.waitForSelector("(//a[contains(@class,'nav-link dropdown-toggle')][normalize-space()='Products'])[1]",{state:"visible",timeout:1500})
            await page.locator("(//a[contains(@class,'nav-link dropdown-toggle')][normalize-space()='Products'])[1]").click()
            const dropdown_element=page.locator("(//a[text()='Poros'])[2]")
            await expect(dropdown_element).toBeVisible()
            const v_Doctor=page.locator("(//a[text()='vDoctor'])[2]")
            await v_Doctor.click()
            await expect(page).toHaveURL("https://startupfo.rest/white-label-telemedicine-app/")
            await page.waitForLoadState()
            const get_Quote=page.locator("//div[@class='buy-button']/a")
            await get_Quote.click()
            const frameLocator=await page.frameLocator(".hs-form-iframe")
            const first_name= frameLocator.locator("//input[@name='firstname']")
            const email=frameLocator.locator("//input[@name='email']")
            const country=frameLocator.locator("//input[@name='country']")
            const message=frameLocator.locator("//textarea[@name='message']")
            const checkbox_1=frameLocator.locator("(//input[@name='voomplatform'])[1]")
            const submitButton=frameLocator.locator("//input[@value='Submit']")
            const title_heading=page.locator("//h4[text()='Thank you for contacting']")
            await first_name.fill(Data.first_name)
            await email.fill(Data.emailId)
            await country.fill(Data.country)
            await message.fill(Data.message)
            await checkbox_1.click()
            await submitButton.click()
        
            await expect(title_heading).toBeVisible()
                
            }) 
    });
        
    
    
    
    