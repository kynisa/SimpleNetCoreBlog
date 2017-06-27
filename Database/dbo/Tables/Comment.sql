CREATE TABLE [dbo].[Comment] (
    [Id]        INT             IDENTITY (1, 1) NOT NULL,
	[PostId]	INT			    NOT NULL,
	[Author]    NVARCHAR (100)  NOT NULL,
    [Content]   NVARCHAR (2000) NOT NULL,
    [CreatedOn] DATETIME        DEFAULT GETUTCDATE() NOT NULL,
	[IsDeleted] BIT             DEFAULT 0 NOT NULL,
    CONSTRAINT [PK_Comment] PRIMARY KEY CLUSTERED ([Id] ASC), 
    CONSTRAINT [FK_Comment_Post] FOREIGN KEY ([PostId]) REFERENCES [Post]([Id])
);

