import React, {useEffect} from 'react'
import MarkdownIt from "markdown-it"

const md = new MarkdownIt({
    html: true, // 在源码中启用HTML标签
    linkify: true, // 将类似URL的文本自动转换为链接
    breaks: true, // 转换段落里的 '\n' 到 <br>
})

interface articleProps {
    content: string,
    editChange: any,
    article?: any
}

export default function Edit(props: articleProps) {
    let viewRef = React.useRef<HTMLDivElement>(null)
    let textareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (viewRef && viewRef.current) {
            const editStr = md.render(e.currentTarget.value)
            viewRef.current.innerHTML = editStr
            props.editChange(e.currentTarget.value, editStr)
        }
    }
    useEffect(() => {
        if (viewRef && viewRef.current) {
            const edit = md.render(props.content)
            viewRef.current.innerHTML = edit
        }
    }, [props.content])
    return (
        <section className="edit">
            <div className="leftbox box">
                <textarea defaultValue={props.content} placeholder="请输入文章内容，md格式"
                          onChange={textareaChange}></textarea>
            </div>
            <div className="rightbox box" ref={viewRef}></div>
        </section>
    )
}