import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({
        nullable: false
    })
    title: string

    @Column({
        nullable: false
    })
    booksId: string


    @Column({
        type: String,
        nullable: false
    })
    authors:string[];

    @Column({
        nullable: false
    })
    numberOfPages: number

    @Column({
        type: "longtext",
        nullable: false
    })
    thumbnail: string

    @CreateDateColumn({ 
        type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)",
        nullable: true
     })
    startedAt: Date

    @CreateDateColumn({ 
        type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)",
        nullable: false
     })
    publicedAt: Date


    @CreateDateColumn({ 
        type: "timestamp",
        nullable: true,
        default: null
    })
    endedAt: Date

    @Column({
        default:0,
        nullable: false
    })
    score: number

    @Column({
        type: "longtext",
        nullable: true
    })
    review: string
}
