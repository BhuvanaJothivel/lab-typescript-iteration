import { HelloService, NumberService } from "./app-service.interface";
import { HelloComponent } from "./app.component";
import { NumberTypes } from "./app.component";

class MockHelloService implements HelloService {

    public sayHello(): string {
        return "Hello ProGrad!";
    }
    public sayHelloWithSpace(): string {
        return "H e l l o  P r o G r a d !"
    }
}

class MockNumberService implements NumberService{
    public findPrime(num = 5) : string {
        var temp = 0;
        for(var i=2 ;i<num;i++){
            if(num%i === 0)
                temp++;
        }
        if(temp == 0)
            return "It is Prime";
        else 
            return "It is not Prime";
    }

    public findMagic(n = 5): string{
        var sum=0,num=n;
        while(num>9)
        {
            sum=num;
            var s=0;
            while(sum!=0)
            {
                s=s+(sum%10);
                sum=sum/10;
            }
            num=s;
        }
        if(num==1)
        return "It is Magic Number";
        else
        return "It is not Magic Number";
    }

    public findVowel(str = "ProGrad") : number{
        let vowel = 0;
        for(var i=0;i<str.length;i++){
            if(str.charAt(i)==='a' || str.charAt(i)==='e' || str.charAt(i)==='i' || str.charAt(i)==='o' || str.charAt(i)==='u' )
                vowel++;
            else if(str.charAt(i)==='A' || str.charAt(i)==='E' || str.charAt(i)==='I' || str.charAt(i)==='O' || str.charAt(i)==='U' )
                vowel++;
        }
        return vowel;
    }
}
describe("print the Hello statement", () => {

    it("should say 'Hello ProGrad!'", () => {

        let mockHelloService = new MockHelloService();
        let helloComponent = new HelloComponent(mockHelloService);

        expect(helloComponent.sayHello()).toEqual("Hello ProGrad!");
    });
});

describe("print the same hello statement with space between all characters", ()=>{
    it("should say 'Hello ProGrad!' with spaces inbetween", ()=>{
        let mockHelloService = new MockHelloService();
        let helloComponent = new HelloComponent(mockHelloService);
        expect(helloComponent.sayHelloWithSpace()).toEqual("H e l l o  P r o G r a d !");
    });
});

describe("find given number is prime or not",()=>{
    it("should say 'It is Prime' or 'It is not Prime' ", ()=>{
        let mockNumberService = new MockNumberService();
        let numberTypes = new NumberTypes(mockNumberService); 
        expect(numberTypes.findPrime(5)).toEqual("It is Prime");
        expect(numberTypes.findPrime(10)).toEqual("It is not Prime");
    });
});

describe("find given number is magic number or not",()=>{
    it("should say 'It is Magic Number' or 'It is not Magic Number'",()=>{
        let mockNumberService = new MockNumberService();
        let numberTypes = new NumberTypes(mockNumberService); 
        expect(numberTypes.findMagic(199)).toEqual("It is Magic Number");
        expect(numberTypes.findMagic(123)).toEqual("It is not Magic Number");
    });
});

describe("count vowels from the given string",()=>{
    it("should return vowels count as number type", ()=>{
        let mockNumberService = new MockNumberService();
        let numberTypes = new NumberTypes(mockNumberService); 
        expect(numberTypes.findVowel("ProGrad")).toEqual(2);
    })
})