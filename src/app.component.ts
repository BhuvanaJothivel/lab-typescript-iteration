import { HelloService, NumberService } from "./app-service.interface";

export class HelloComponent {

    constructor(private helloService: HelloService) {}

    public sayHello(): string {

        return this.helloService.sayHello();
    }
    public sayHelloWithSpace() : string {
        let temp = this.helloService.sayHelloWithSpace();
        let str = "";
        for(var i=0; i<temp.length;i++){
            str = str + temp[i]+" ";
        }
        return str;
    }
}

export class NumberTypes {
    constructor(private numberService: NumberService) {}
    
    public findPrime(num = 5): string {
        var temp = 0;
        for(var i=2; i<num; i++){
            if(num%i == 0)
                temp = 1;
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