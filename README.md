# 문서

## 1. Git commit convention

참조: [Udacity Git Commit Message Style Guide](https://udacity.github.io/git-styleguide/)

```
type: Subject

body

footer
```

```
feat: add user models

개인화 기능에 필요해 user models을 추가함

Resolves: #12
See also: #23, #24
```

### 1.A. 자세한 내용

#### 1.A.1 **Type**

| 종류     | 내용                                                  | 기타                          |
| -------- | ----------------------------------------------------- | ----------------------------- |
| feat     | 파일, 폴더, 새로운 기능 추가                          |
| fix      | 버그 수정                                             |
| docs     | 문서 생성, 추가, 수정                                 |
| style    | 포멧팅, 빠진 세미콜론 추가 등 코드 스타일 변경        | 코드의 변화는 없다            |
| refactor | 리팩토링                                              |
| test     | 테스트 코드 추가 및 리펙토링                          | production code의 변화는 없다 |
| chore    | build 작업, 패키지 관리, JSON데이터 포멧, CSS 변경 등 | production code의 변화는 없다 |
| conf     | .env, .gitignore 추가                                 |
| rename   | 파일 혹은 폴더명 수정, 옮기는 작업만 한 경우          |
| remove   | 파일 삭제                                             |

#### 1.A.2. **The Subject**

주제는 50자 미만으로 하고, 대문자로 시작해 마지막에 마침표는 쓰지 않는다. 명령적인 문장을 사용해 커밋이 무엇을 했는지 설명하기보다 하는 일을 설명한다. 예시, use change; not changed or changes.

#### 1.A.3. **The Body**

몸통에는 커밋에 설명이나 상황이 필요할 때만 사용한다. 어떻게 했는지가 아니라 한 일의 내용과 이유를 설명한다.
몸통과 주제 사이에 빈 줄이 필요 하고 각 줄의 길이는 72자 이하로 한다

#### 1.A.4. **The Footer**

바닥글은 선택사항이고 issue tracker IDs를 참조하는데 사용한다

## 2. Git branch convention

새 작업을 할 때 브랜치를 만들고 작업 후 PR한다. 이때 새 브랜치 이름은 할일을 적는다. 띄워쓰기가 필요한 경우 공백을 사용할 수 없기 때문에 `_`를 사용한다.

### 2.A. 의문

#### 2.A.1. 브랜치 이름이 중복된다면?

동일한 작업을 할 때 브랜치 이름이 똑같으면 어떻게 분간할지 의문이 생겼다. 브랜치 이름에 번호나 날짜를 써야 될까? git branch 전략인 git-flow, github-flow를 보니 브랜치는 임무를 마치면 삭제되고 직접 PR, merge를 해보니 커밋 기록에 브랜치 이름이 ~~남지 않는다. 그래서 크게 신경쓰지 않아도 될 것 같다.~~ Git graph에서 보인다. 어딘가 남긴 하지만 일단 필요성이 크게 와닿지 않아 **할 일**만 써보도록 한다

**결론**: 작업 후 브랜치는 삭제될거고, 커밋에 브랜치 이름이 기록되지 않으니 브랜치 이름이 중복되는 건 신경쓰지 말고 그냥 **할 일**을 적는다.

## 3. API

### 3.A. UserServices

#### 3.A.1. getUser(email:string):Promise<User>

- async/await으로 받아와 state에 넣어줘야 값을 읽을 수 있다

```ts
function Home() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const gettedUser = await userServices.getUser("test@t.co");
      setUser(gettedUser);
    })();
  }, []);

  return <h1>{user && user.email}</h1>;
}
```

#### 3.A.2. getLastUserId():Promise<number>

- 전체 user 배열은 받아서 id를 내림차순으로 정렬해 index 0의 id값을 반환한다

#### 3.A.2. postUser(user:User)

- user객체를 전달하면 데이터베이스에 저장한다
